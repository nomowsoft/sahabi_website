 export default function handleAssociation(req, res) {
    res.statusCode = 200;
   res.setHeader('Content-Type', 'application/json');
   res.end(JSON.stringify({
    "applinks": {
        "apps": [],
        "details": [
        {
          "appID": "D699SS3X8T.Roqay.com.QuranShaby",
          "paths": ["*"]
        }
      ]
    }
  }));
 }