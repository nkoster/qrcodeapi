
This is a too simple example of an API that receives a string and returns a JSON in the following format:

```
{
  "qrqode": "<base64>"
}
 ```

Example:

```
curl localhost:10000/example.com
{"qrcode":"iVBORw0KGgoAAAANSUhEUgAAAGMAAABjAQMAAAC19SzWAAAABlBMVEUAAAD///+l2Z/dAAAAAnRSTlP//8i138cAAAAJcEhZcwAACxIAAAsSAdLdfvwAAADpSURBVDiNzdS7DcMgEADQiyjcxQucxBp0XiksYOIJshIdayB5AV9HYflysfJrzNElyAWvOOl+Bvj7wB9rAfAFQ4STJuJ17JiSXDRFDAm8fC1iQ20aXfYt4jUk9J/MDvWoT/RV7ZHkUJynTwcPtTgcYX51oiZiex0AHPSqSg5xvjpDmrbObmA2yCdNS5fBmSk+M6tI8mWWIHvTtLgcipnSs4MVUbS3wpKLV5WwT+sFsNe0z0FWQJfMNhSJtqRp32t8V1tTxItMDCw1yEvWHU8NGgc8D6+eVcQStPYFVe17Lf/KTJp++y616g4DYbIJbESHagAAAABJRU5ErkJggg=="}
```
wich returns a JSON that contains a base64 encoded string like "https://example.com".
