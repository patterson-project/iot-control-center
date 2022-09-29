from flask import Request
from config import Config
from device import Device, LightingDeviceTypes
from powerrequest import PowerRequest
import requests


class ReverseProxy:
    def __init__(self, device):
        self.proxy = {
            LightingDeviceTypes.KasaBulb: self.kasa_plug_request,

        }
        self.device: Device = device

    def handle(self, request: Request):
        self.proxy[self.device.model](request)

    def kasa_plug_request(self, request: PowerRequest):
        requests.post(Config.BULB_CONTROLLER_URL +
                      "/request", json=request.to_json())
