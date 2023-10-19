# exoplanet-sonification

<p>
Working demo is at <a href="http://stephenandrewtaylor.net/exo-sonification/exoplanets.html">
  http://stephenandrewtaylor.net/exo-sonification/exoplanets.html</a>.
  
A sonified chart of exoplanets, originally based on 
<a href="https://xkcd.com/1071/">XKCD 1071: Exoplanets</a> using data from the 
<a href = "http://phl.upr.edu/projects/habitable-exoplanets-catalog/data/database">
Planetary Habitability Laboratory</a>, and based on d3 code by <a href = "http://codementum.org/exoplanets/">Lane Harrison</a>
and <a href="https://bl.ocks.org/mbostock/3007180">Mike Bostock</a> (this is a big dataset which may take awhile to load). 
The lower the pitch, the bigger the planet; 
the plucked string sound signifies a hydrogen-rich atmosphere, while a metallic sound signifies a metals-rich atmosphere 
(any atmosphere more complex than hydrogen and helium).
</p>
<p>
Sounds made by <a href="http://kyma.symbolicsound.com/">Kyma</a>, and coded with the Web Audio API. 
This is pretty verbose code because of the large number of short samples; it's probably possible to clean up the sample selection code using a d3.scale.
</p>
