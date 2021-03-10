from datetime import datetime

def getDate(unixtime):
  date = datetime.utcfromtimestamp(unixtime/1000).strftime('%Y-%m-%d_%H')
  return date

getDate(1604802266220)
#2020-11-08_02
