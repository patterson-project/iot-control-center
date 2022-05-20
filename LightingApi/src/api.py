import requests
import json
from flask import Flask, Response, redirect, request
from flask_cors import CORS
from gevent.pywsgi import WSGIServer
from utils import LightingRequest, ServiceUris


app: Flask = Flask("__main__")
CORS(app)


@app.route("/lighting/health")
def index() -> Response:
    return Response("Healthy", status=200)


@app.route("/lighting/ledstrip", methods=["POST"])
def led_strip() -> Response:
    body = request.get_json()
    try:
        requests.post(ServiceUris.LED_STRIP_SERVICE, json=body)
    except requests.HTTPError as e:
        return Response("Error: " + str(e), 400)

    return Response(status=200)


@app.route("/lighting/bulb1", methods=["POST"])
def bulb_1() -> Response:
    body = request.get_json()
    try:
        requests.post(ServiceUris.BULB_SERVICE + "/lightingrequest/bulb1", json=body)
    except requests.HTTPError as e:
        return Response("Error: " + str(e), 400)

    return Response(status=200)


@app.route("/lighting/bulb2", methods=["POST"])
def bulb_2() -> Response:
    body = request.get_json()
    try:
        requests.post(ServiceUris.BULB_SERVICE + "/lightingrequest/bulb2", json=body)
    except requests.HTTPError as e:
        return Response("Error: " + str(e), 400)

    return Response(status=200)


if __name__ == "__main__":
    http_server = WSGIServer(("", 8000), app)
    http_server.serve_forever()
