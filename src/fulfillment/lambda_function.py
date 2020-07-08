import requests
import urllib
import json


def get_slot(event, name):
    return event["currentIntent"]["slots"].get(name)


def lambda_handler(event, context):
    print(event)
    with open('forms.json') as f:
        data = json.load(f)

    info = data[event["currentIntent"]["name"]]
    url = info["url"]
    queryData = list(
        map(lambda x: (x["name"], x["value"] if "value" in x else get_slot(event, x["slot"])), info["params"]))

    print(queryData)
    print(url + urllib.parse.urlencode(queryData))
    print(requests.get(url + urllib.parse.urlencode(queryData)))

    return {
        "dialogAction": {
            "type": "Close",
            "fulfillmentState": "Fulfilled",
            "message": {
                "contentType": "PlainText",
                "content": info["completeMsg"]
            }
        }
    }
