# Geo-Inference-Attacks
Update: The code doesn't work currently.

These are attacks from which the attacker can know your location. <br/><br/>
The webpage figures out which country you live in by checking if a particular image is present in your disk's cache or not.
Most people use Google in their day to day live to search the Web. From a list all the location specific google domains, 
the code checks if the image of the Google's logo has been cached or not. If so, then it means that you belong to the the 
country corresponding to that domain.<br/><br/>
This attack works only in Firefox, Safari, and IE. If you wish to try it out, and none of the mentioned browsers are your 
default browser, do search a little bit on Google or reload it after opening the browser first.<br/><br/>
I have only included some countries(~12) in the domains[] array. <br/><br/>
The working website can be found [here][2] <br/>
<br/>
This idea was taken from the paper [I Know Where You've Been: Geo-Inference Attacks via the Browser Cache][1] by Yaoqi Jia, Xinshu Dong, Zhenkai Liang and Prateek Saxena 
[1]:http://www.computer.org/csdl/mags/ic/2015/01/mic2015010044-abs.html
[2]:http://aashaka.github.io/Geo-Inference-Attacks/
