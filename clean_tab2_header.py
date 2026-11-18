with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'r', encoding='utf-8') as f:
    text = f.read()

header_start = text.find('<div className="panel-card-header">')
if header_start != -1 and header_start > text.find("activeTab === 'gis'"):
    header_end = text.find('</div>\n              </div>', header_start) + len('</div>\n              </div>')
    text = text[:header_start] + text[header_end:]
    print("Removed panel-card-header from Tab 2 successfully!")

    with open(r'D:\Ai_agents\Báo cáo dự án\smart-water-management\App.jsx', 'w', encoding='utf-8') as f:
        f.write(text)
else:
    print("Header not found or already removed.")
