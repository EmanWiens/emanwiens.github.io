/*
  Emanuel W.
  Nov 22, 2018
  This is my Particle System. The particles start in a spiral and 
  bounce off one another and the walls. 
  Press space to start the animation. 
  Each particle slightly changes color on each bounce.
*/

ArrayList<Particle> p = new ArrayList<Particle>();
boolean start = true;

final int pCount = 1000;
final float maxSpeeds = .25;
final float maxMass = 1, minMass = .25;
float beforeMilli = 0, afterMilli = 0, diffMilli = 0;
float frameR = 60;

void setup() {
  size(640,640,P3D);  
  setupParticlesInSpiral();
}

void draw() {
  frameRate(frameR);
  background(255);
  beforeMilli = millis();
  
  for (int i = 0; i < p.size(); i++) {
    stroke(color(p.get(i).r, p.get(i).g, p.get(i).b));
    
    if (start)
      p.get(i).updatePosition(diffMilli);
    p.get(i).draw();
  }

  afterMilli = millis();
  diffMilli = afterMilli - beforeMilli;
}

void keyPressed() {
  if (key == ' ')
    start = !start;
}

void setupParticlesInSpiral() {
  float x, y;
  float angleOfRotation = 0;
  int layer = 0;
  int layerParticleCount = 0;
  float mass;
  Particle temp = new Particle(-100, -100, 0, 0, 1, -1);
  
  for (int i = 0; i < pCount; i++) {
    x = float(width)/2 + temp.diameter * layer * cos(angleOfRotation * i);
    y = float(height)/2 + temp.diameter * layer * sin(angleOfRotation * i);
    mass = random(minMass, maxMass);
    
    p.add(new Particle(x, y, random(-maxSpeeds, maxSpeeds), 
          mass * random(-maxSpeeds, maxSpeeds), mass, i));
    layerParticleCount++;
    
    if (i == 0 || angleOfRotation * (layerParticleCount + 1) > 2*PI) {
      layer++;
      layerParticleCount = 0;
      angleOfRotation = 2*PI * temp.diameter * layer / temp.diameter;
      angleOfRotation = 2*PI / (int)angleOfRotation;
    }
  }
}

class Particle {
  float x, y;
  PVector v;
  final float maxDiameter = 10;
  float diameter = maxDiameter;
  int id;
  float mass;
  float r, g, b;
  boolean red = true, green = false, blue = false;
  boolean collided = false;

  public Particle(float x, float y, float vX, float vY, float mass, int id) {
    this.x = x;
    this.y = y;
    v = new PVector(vX, vY);
    this.id = id;
    this.mass = mass;
    diameter = mass * maxDiameter;
    r = 0;
    g = 0;
    b = 0;
  }

  void updatePosition(float timeRatio) {
    x += v.x * timeRatio;
    y += v.y * timeRatio;
    
    checkForParticleCollision();
    updateFromWallCollision();
    fixOverlap();
  }
  
  void fixOverlap() {
    float dx, dy, radii;
    boolean noOverlap = false;
    
    while (!noOverlap) {
      for (int i = 0; i < p.size(); i++) {
        if (i != id) {
          dx = p.get(i).x - x;
          dy = p.get(i).y - y;
          
          radii = p.get(i).diameter / 2 + diameter / 2;
          
          noOverlap = true;
          if (sq(dx) + sq(dy) < sq(radii)) {
            noOverlap = false;
            
            if (p.get(i).x < x) { 
              x++; // += abs(v.x);
              p.get(i).x--; // -= abs(p.get(i).v.x);
            }
            else {
              x--; // -= abs(v.x);
              p.get(i).x++; // / += abs(p.get(i).v.x);
            }
            
            if (p.get(i).y < y) { 
              y++; // += abs(v.x);
              p.get(i).y--; // -= abs(p.get(i).v.x);
            }
            else {
              y--; // -= abs(v.x);
              p.get(i).y++; // / += abs(p.get(i).v.x);
            }
          }
        }
      }
    }
  }

  private boolean updateFromWallCollision() {
    boolean updated = false;
    // out on x
    if (x + diameter / 2 > width) {
      v.x = -v.x;
      updated = true;
      
      x = width - diameter / 2;
    } else if (x - diameter / 2 < 0) {
      v.x = -v.x;
      updated = true;
      
      x = diameter / 2;
    }

    // on y
    if (y + diameter / 2 > height) {
      v.y = -v.y;
      updated = true;
      
      y = height - diameter / 2;
    } else if (y - diameter / 2 < 0) {
      v.y = -v.y;
      updated = true;
      
      y = diameter / 2;
    }
    
    if (updated) 
      changeColor(this);

    return updated;
  }
  
  void checkForParticleCollision() {
    float dx, dy, radii;
    
    for (int i = 0; i < p.size(); i++) {
      if (i != id) {
        dx = p.get(i).x - x;
        dy = p.get(i).y - y;
        
        radii = p.get(i).diameter / 2 + diameter / 2;
        
        if (sq(dx) + sq(dy) < sq(radii)) {
          updateFromParticleCollision(p.get(i));
          
          changeColor(this);
          changeColor(p.get(i));
        }
      }
    }
  }
  
  private void changeColor(Particle part) {
    if (part.red) {
      part.r++;
      
      if (part.b > 0)
        part.b--;
      
      if (part.r > 255) {
        part.red = false;
        part.green = true;
        part.blue = false;
      }
    } else if (part.green) {
      part.g++;
      
      if (part.r > 0)
        part.r--;
      
      if (part.g > 255) {
        part.red = false;
        part.green = false;
        part.blue = true;
      }
    } else if (part.blue) {
      part.b++;
      
      if (part.g > 0)
        part.g--;
        
      if (part.b > 255) {
        part.red = true;
        part.green = false;
        part.blue = false;
      }
    }
  }

  private void updateFromParticleCollision(Particle p2) {
    // calculate where they are going
    // test if those paths intersect
    PVector n, un, ut, vec1n, vec2n, vec1t, vec2t;
    float v1n, v2n, v1t, v2t;
    
    if (id != p2.id) {
      n = new PVector(p2.x - x, p2.y - y);
      un = n.copy().normalize();
      ut = new PVector(-un.y, un.x);
      
      v1n = un.copy().dot(v);
      v1t = ut.copy().dot(v);
      
      v2n = un.copy().dot(p2.v);
      v2t = ut.copy().dot(p2.v);
      
      float copyOfv1n = v1n;
      v1n *= mass - p2.mass;
      v1n += 2 * p2.mass * v2n;
      v1n /= mass + p2.mass;
      
      v2n *= p2.mass - mass;
      v2n += 2 * mass * copyOfv1n;
      v2n /= mass + p2.mass;
      
      vec1n = un.copy().mult(v1n);
      vec1t = ut.copy().mult(v1t);
      
      vec2n = un.copy().mult(v2n);
      vec2t = ut.copy().mult(v2t);
      
      v = vec1n.add(vec1t);
      p2.v = vec2n.add(vec2t);
    }
  }

  void draw() {
    strokeWeight(diameter);
    point(x, y);
  }
}
