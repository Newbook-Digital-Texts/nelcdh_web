

$(document).ready(function(){
    $("h1").animate({ 
      'font-size' : "3vw",
        'opacity': '1',
    },3000);
});

WebFont.load({
    google: {
      families: ['Any Google Font']
    }
  });

var additionalOptions = {
              
              
              timenav_height: 250
            }

            timeline = new TL.Timeline('timeline-embed',
            'https://docs.google.com/spreadsheets/d/1iGJ-gbk9dsIEjizU2qgXN2eULLs2Vo_finEvVE8OEbc/edit?fbclid=IwAR08uMBlIgeH-W_l-faJWolUM-D8bSSLhG-WcNBmW2dxLqWwEUSSLBMkku8#gid=0',
            additionalOptions);
