import os
from http.client import HTTPConnection
from urllib.parse import urljoin, urlunparse
from urllib.request import urlretrieve
from html.parser import HTMLParser

class ImageParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        if tag != 'img':
            return
        if not hasattr(self, 'result'):
            self.result = []
        for name, value in attrs:
            if name == 'src':
                self.result.append(value)

def download_image(url, data):
    dw_path = os.path.expanduser("~\\Downloads")
    if not os.path.exists(dw_path):
        os.makedirs(dw_path)
    parser = ImageParser()
    parser.feed(data)
    # HTML 문장을 feed() 함수에 주면, 바로 파싱하고 그 결과를 parser.result 리스트에 추가함

    dataSet = set(x for x in parser.result)

    for x in sorted(dataSet):
        imageUrl = urljoin(url, x)
        # 다운로드 하기 위해 소스 url과 타깃 파일명을 지정한다. 소스 url을 지정힐 때
        # urljoin() 함수를 사용하는데, 이는 baseURL과 파일명을 함쳐서 완전한 url을 리턴한다.
        baseName = os.path.basename(imageUrl)
        targetFile = os.path.join(dw_path, baseName)
        print("Downloading...", imageUrl)
        urlretrieve(imageUrl, targetFile)
        # 이미지 파일을 다운로드하기위해 urlretrieve() 함수를 사용. 이는 src로부터 파일을 가져와서 targetFile 파일로 생성해준다.

def main():
    host = 'www.google.com'
    # host = input('ex) www.google.com : ')
    conn = HTTPConnection(host)
    conn.request("GET", '')
    res = conn.getresponse()

    charset = res.msg.get_param('charset')
    data = res.read().decode(charset)
    conn.close()

    print("\n>>>> download images from ", host)
    url = urlunparse(('http', host, '', '', '', ''))
    download_image(url, data)

if __name__ == '__main__':
    main()