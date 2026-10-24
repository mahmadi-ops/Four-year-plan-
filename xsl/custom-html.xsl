<?xml version="1.0" encoding="UTF-8"?>
<!-- Custom HTML conversion: one extra stylesheet (assets/wide.css, served as
     external/wide.css) that lets the text and the embedded planners and maps
     use the full width of the window instead of the theme's 700px column, and
     one extra script (assets/feedback.js) that adds a feedback link to each page. -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:import href="./core/pretext-html.xsl"/>
  <xsl:param name="html.css.extra" select="'external/wide.css'"/>
  <!-- feedback link on every page (assets/feedback.js) -->
  <xsl:param name="html.js.extra" select="'external/feedback.js'"/>
</xsl:stylesheet>
