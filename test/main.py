import json

pages = ["Home", "", "", "" ] 

json_content_index = json.load("content_index.json")

json_content_files = {}
for name in json_content_index["name"]:
    json_content_files[name] = json.load("content_index.json")


html_header = '''
<HTML>
    <HEAD>
        <TITLE>E. Wiens</TITLE>
        <link rel="stylesheet" type="text/css" href="style.css">
    </HEAD>
    
    <BODY BGCOLOR="#555">
        <div class="banner">
            
            <div class="buttonHolder">
                <a href="about.html"><button type="button" class="headerBtn">About</button></a>
                <a href="projects.html"><button type="button" class="headerBtn">Projects</button></a>
                <a href="index.html"><button type="button" class="headerBtn">Home</button></a>
                <a href="index.html"><H1 class="name">Emanuel Wiens</H1></a>
            </div>
        </div>'''
html_body_header = '<div class="contentPannel">'
html_body_footer = '''
        </div>
    </BODY>
</HTML>'''

