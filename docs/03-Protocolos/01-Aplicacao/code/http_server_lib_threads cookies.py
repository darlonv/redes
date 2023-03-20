from http.server import BaseHTTPRequestHandler, HTTPServer
from socketserver import ThreadingMixIn
from http.cookies import SimpleCookie, BaseCookie

from http.cookiejar import CookieJar

from time import sleep

address = '0.0.0.0'
port= 8088


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):


        cl = CookieJar()
        # cookie_l = SimpleCookie()
        # cookie_l.load(self.headers)
        # print(cookie_l)

        #Seta o cookie
        cookie = SimpleCookie()
        cookie['fig'] = 'newton'
        cookie['fig']['path'] = '/figss'
        cookie['sugar'] = 'wafer'


        self.send_response(200)
        self.send_header('Content-type','text/html')
        for c in cookie.values():
            self.send_header('Set-Cookie', c.output(header='').lstrip())
        self.end_headers()

        content = '<html><body>Hello world</body></html>'

        self.wfile.write(bytes(content, 'utf-8'))
        return

class ThreadedHTTPServer(ThreadingMixIn, HTTPServer):
    #Handle requests in a separate thread
    pass

def main():
    try:
        server = ThreadedHTTPServer((address, port), Handler)
        print('Servidor executando. <Ctrl-C> para parar.')
        server.serve_forever()

    except KeyboardInterrupt:
        print('Exiting server')
        server.socket.close()

if __name__ == '__main__':
    main()