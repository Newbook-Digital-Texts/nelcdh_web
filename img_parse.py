text = 'https://digitalcollections.lib.washington.edu/digital/api/singleitem/image/iraqdiaries/'
# Adjust the star and end pages accordingly based on the img url
start_page = 1224
end_page = 1657

result = ""
for i in range (start_page, end_page + 1):
	result += '<img src = "' + text +  str(i) +  '/default.jpg">\n'

# Displays the url's that you have generated. Copy and paste this into your text editor (Notepad or Word for example)	
print(result)