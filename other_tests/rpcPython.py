import zerorpc
import pudb

class HelloRPC(object):
    def hello(self, name):
        #pudb.set_trace()
        return ("Hello, %s" % name)

s = zerorpc.Server(HelloRPC())
s.bind("tcp://0.0.0.0:4242")
s.run()
