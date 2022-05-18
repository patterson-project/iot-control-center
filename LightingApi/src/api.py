import requests
from flask import Flask, Response, request
from flask_cors import CORS
from gevent.pywsgi import WSGIServer

app: Flask = Flask("__main__")
CORS(app)


@app.route("/lighting/health")
def index() -> Response:
    return Response("Healthy", status=200)


@app.route("/lighting/ledstrip", methods=["POST"])
def led_strip() -> Response:
    body = request.get_json()
    print(str(body))
    requests.post("http://10.0.0.68:8000/lightingrequest", body)
    return Response(status=200)


@app.route("/lighting/bulb1", methods=["POST"])
def bulb_1() -> Response:
    requests.post(
        "http://bulb-1-cluster-ip.default.svc.cluster.local:8000/lightingrequest",
        request.data,
    )
    return Response(status=200)


@app.route("/lighting/bulb2", methods=["POST"])
def bulb_2() -> Response:
    body = request.get_json()
    requests.post(
        "http://bulb-2-cluster-ip.default.svc.cluster.local:8000/lightingrequest", body
    )
    return Response(status=200)


if __name__ == "__main__":
    http_server = WSGIServer(("", 8000), app)
    http_server.serve_forever()
