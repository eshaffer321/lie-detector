# lie-detector
##Summary
Chrome extension to inform users about the reliability and credibility of news articles. Lie-detector will
analyze all the links and sources of any webpage, and compare them to [OpenSources](http://www.opensources.co/), a 
professionally curated lists of online sources. Second, the article's text will be extracted and sent through 
[Google's natural language API](https://cloud.google.com/natural-language/) to analyze the sentiment of an article. 
This search for emotive or biased language. Using both of these sources, a trust score will be displayed in the extension.

##Monterey Bay Hackathon 1st Place
This project was first place in the [Monterey Bay Hackathon 2018](https://csumb.edu/iied/events/startup-monterey-bay-hackathon-2018)

## Getting started.
###Prerequisites
In order to run this extension the companion [node.js server](https://github.com/eshaffer321/lie-detector-api) must be running

###Install
* Download or clone the app
* Open the [chrome extension](chrome://extensions/) page.
* Enable developer options
* Click load unpacked and select the lie-detector folder.

##Examples

###Info Wars
<p align="center">
  <img src="/resources/images/readme/infowars.png"/>
</p>
![Alt text](./resources/images/readme/info-1.png "Optional Title")


####Scientific American
<p align="center">
  <img src="./resources/images/readme/sci-america.png"/>
</p>