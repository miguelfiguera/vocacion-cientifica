import uniqid from "uniqid";

const entrevistados = [
  {
    id: uniqid(),
    name:'',
    jobDescription:'',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:''
  },{
    id: uniqid(),
    name:'André Villavicencion',
    email:'andres.villavicencio.spach@gmail.com',
    jobDescription:'Divulgador, paleontólogo, paleoartista y presidente de la Sociedad Paleontológica de Chile (@SPACH_CL)',
    jobTitle:'',
    facebook:'https://www.facebook.com/spach.cl/',
    instagram:'https://www.instagram.com/spach_chile',
    twitter:'https://twitter.com/spach_chile',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/NuX3-IdFWXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },{
    id: uniqid(),
    name:'Mónica Vázquez',
    email:'',
    jobDescription:'Doctora en Ciencias, en la especialidad de Ingeniería Eléctrica, y técnico académico en el Instituto de Investigaciones en Matemáticas Aplicadas y en Sistemas de la UNAM ',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/nM-aYVp-1Oo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },{
    id: uniqid(),
    name:'Magali Arellano',
    email:'magali.arellano@infotec.mx',
    jobDescription:'Dra. en Ciencias de la computación e investigadora de @InfotecMexico',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/EwMc2lgdvJg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    linkedin:'https://www.linkedin.com/in/magali-arellano-vazquez/',

  },{
    id: uniqid(),
    name:'María Rodríguez',
    email:'mariarodriguezchemical@gmail.com',
    jobDescription:'Dra. en Ciencias, profesora titular y coordinadora del Postgrado en Química de la Facultad de Ciencias de la de la Universidad Central de Venezuela.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/lLuYAypZBtg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },{
    id: uniqid(),
    name:' Estefanía Morales',
    email:'esmoru@gmail.com',
    jobDescription:' Dra. en Ciencias Biomédicas e investigadora postdoctoral de la @unam',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/xk_o63Juen8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    linkedin:'https://www.linkedin.com/in/estefan%C3%ADa-morales-ruiz-2490211b9/',

  },{
    id: uniqid(),
    name:'Carolina Gómez Albarrán',
    email:'caroli13@ucm.es',
    jobDescription:'desempeña como microbióloga e investigadora predoctoral en la @ucomplutensemadrid',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/jNzNpm4up98" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    linkedin:'https://www.linkedin.com/in/carolina-g%C3%B3mez-albarr%C3%A1n-442406145/'
  },{
    id: uniqid(),
    name:'Omar Regalado',
    email:'omar.fernandez.13@ucl.ac.uk',
    jobDescription:'Doctor en Ciencias de la Tierra e investigador del área de paleobiología de la Universidad de Tubinga, @unituebingen, Alemania.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/0mqodrKpsGI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
    ,linkedin:'https://www.linkedin.com/in/omar-rafael-regalado-fernandez/'
  },{
    id: uniqid(),
    name:'Tamara Hernández',
    email:'tamarahdez7@gmail.com',
    jobDescription:'Dra. en Ciencias de la Salud e investigadora en @UniversityLeicester, Inglaterra.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/R1hOwAAH2c4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    linkedin:'https://www.linkedin.com/in/tamara-hernandez-beeftink/',
    researchgate:'https://www.researchgate.net/profile/Tamara-Hernandez-Beeftink'
  },{
    id: uniqid(),
    name:'Saúl Ares',
    email:'saul.ares@csic.es',
    jobDescription:'',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'https://twitter.com/omeuxeito',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/WBqVsoYGA4Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    linkedin:'https://www.linkedin.com/in/sa%C3%BAl-ares-37610a28/'
  },{
    id: uniqid(),
    name:'Dra. Claudia Infante',
    email:'claudia.infante@uautonoma.cl',
    jobDescription:' Dra en Ciencias Biológicas, investigadora del Laboratorio de Biotecnología de la @uautonomadechile.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/F6M8yn5Wdk4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    linkedin:'https://www.linkedin.com/in/claudia-infante-b7826236/'

  },{
    id: uniqid(),
    name:'Verónica Díez Díaz',
    email:'diezdiaz.veronica@gmail.com',
    jobDescription:'Dra. en Ciencias Geológicas, e investigadora postdoctoral en el Museo de Historia Natural de Berlín @mfnberlin - Instituto Leibniz para la Investigación Zoológica y de Vida Silvestre@izwberlin.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/hMqiPwrE2x0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    linkedin:'https://www.linkedin.com/in/ver%C3%B3nica-d%C3%ADez-d%C3%ADaz-265b2940/'
  },{
    id: uniqid(),
    name:' Nelson Sepúlveda',
    email:'',
    jobDescription:'Dr. en Ciencias Físicas, académico en la Universidad Central de Chile, @UniversidadCentralCL, y presidente de la Sociedad Chilena de Enseñanza de la Física, @sociedadchilenadeensenanza1175.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/PtvCf_TICSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    linkedin:'https://www.linkedin.com/in/nelson-sepulveda-03579463/?originalSubdomain=cl'
  },{
    id: uniqid(),
    name:'Adriana Araujo',
    email:'adrianavictoriaa@gmail.com',
    jobDescription:' Dra. en Física Teórica e investigadora de la @usergioarboleda, Colombia.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/vvzIjkTYon8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },{
    id: uniqid(),
    name:'Michel Geovanni Santiago-Martínez,',
    email:'geo_santiagom@uconn.edu',
    jobDescription:'Microbiólogo, investigador postdoctoral y profesor asistente de la Universidad de Connectituc, @uconn.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/B6ln8eQZSDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },{
    id: uniqid(),
    name:'María Luisa Valenzuela',
    email:'maria.valenzuela@uautonoma.cl',
    jobDescription:'Dra. en Química, investigadora del Instituto de Ciencias Químicas Aplicadas de la Facultad de Ingeniería de la Universidad Autónoma de Chile, @uautonomadechile .',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/25J4PE2SlN8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },{
    id: uniqid(),
    name:'Víctor Muñoz',
    email:'vmunoz@macul.ciencias.uchile.cl    ',
    jobDescription:'Dr. en Ciencias e investigador del Departamento de Física de la Universidad de Chile.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/NdoK7TSOy38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },{
    id: uniqid(),
    name:'Jenna Davenport',
    email:'palaeoscene@gmail.com    ',
    jobDescription:'paleontóloga.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/6VvsQ8kYCus" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },{
    id: uniqid(),
    name:'María Belén Camarada',
    email:'mbcamara@uc.cl',
    jobDescription:'Dra. en Ciencias Exactas, química de profesión, y profesora asistente de la Pontificia Universidad Católica de Chile.',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    linkedin:'https://www.linkedin.com/in/maria-belen-camarada/',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/eMRa-uQiP_o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
  },{
    id: uniqid(),
    name:'Lucía Canevaro',
    email:'luciacanevaro@yahoo.com    ',
    jobDescription:'Dra. en Física Médica e investigadora del Instituto de Radioprotección y Dosimetría de Río de Janeiro, Brasil',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:'<iframe width="560" height="315" src="https://www.youtube.com/embed/xWGLRkLEbxw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    linkedin:'https://www.linkedin.com/in/luc%C3%ADa-canevaro-17078215/'
  },{
    id: uniqid(),
    name:'',
    email:'',
    jobDescription:'',
    jobTitle:'',
    facebook:'',
    instagram:'',
    twitter:'',
    interview:''
  },
];



