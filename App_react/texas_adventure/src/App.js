import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Background Video</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" 
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" 
        crossorigin="anonymous">
          <!--Font Awesome-->
          <script src="https://kit.fontawesome.com/63582255f8.js" 
          crossorigin="anonymous"></script>
          
          <!--Google Fonts-->
          <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../css/styles.css">
    </head>
    <body>
        
       
      <div id='hero' >
    
           <video
           class ="vid1"
            loop
           muted
           autoplay
           preload="auto"
          >
    
            <source src="../Videos/Pexels Videos 2330708.mp4" type="video/mp4">
            Your browser does not support the video tag.
    
    
            </video>
            <!--Navbar Top of Page-->
          <nav class="navbar navbar-expand-lg navbar-light bg-light z-index navposition " style="width:80%; ">        
            <a class="navbar-brand" href="index.html">
               
                <!--Font Awesome Icon-->
                  <i class="fab fa-facebook"></i> 
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" 
             data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" 
             aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
              </button>
                
            <!--Navbar Links-->
              <div class="collapse navbar-collapse " id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0" >
                  <li class="nav-item active ">
                    <strong><a class="nav-link" href="Index.html">Home</a></strong>
                  </li>
                  <li class="nav-item">
                    <strong><a class="nav-link" href="faqs.html">About</a></strong>
                  </li>
                  <li class="nav-item">
                    <strong><a class="nav-link" href="faqs.html">FAQ</a></strong>
                  </li>
                </ul>
              </div>
            
          </nav>
        <div class="caption">
          
             <h1>Texas Adventure App</h1>
            <form class="form-inline my-2 my-lg-0 caption">
      
                <button class="btn btn-success" type="submit">
                  Your Next Adventure 
                </button>
              </form>
          
            
            <div class="card" style="width: 18rem; height:25rem " >
              <div style="overflow:hidden scroll; ">
              <img src="../The-Best-Classic-Tacos-550.jpg" class="card-img-top" alt="...">
              <div class="card-body" >
                <h5 class="card-title">Location Name</h5>
                <p class="card-text" >Very long description what the place is and just basic information that can be used to interest people who want to go her and have fun or enjoy the sights
                
                </p>
              
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Directions</li>
                <li class="list-group-item">Weather</li>
                <li class="list-group-item">Activities in the area</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
            <div >
              <img src="../The-Best-Classic-Tacos-550.jpg" class="card-img-top" alt="...">
              <div class="card-body" >
                <h5 class="card-title">Location Name</h5>
                <p class="card-text" >Very long description what the place is and just basic information that can be used to interest people who want to go her and have fun or enjoy the sights
                
                </p>
              
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Directions</li>
                <li class="list-group-item">Weather</li>
                <li class="list-group-item">Activities in the area</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
            <div >
              <img src="../The-Best-Classic-Tacos-550.jpg" class="card-img-top" alt="...">
              <div class="card-body" >
                <h5 class="card-title">Location Name</h5>
                <p class="card-text" >Very long description what the place is and just basic information that can be used to interest people who want to go her and have fun or enjoy the sights
                
                </p>
              
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Directions</li>
                <li class="list-group-item">Weather</li>
                <li class="list-group-item">Activities in the area</li>
              </ul>
              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
              
            </div>
            
            
          </div > 
          
          
        </div>
      
       </div>
    
       <!-- <video
       class="vid2"
       loop
       muted
       autoplay
       preload="auto">
     <source src="../Videos/video (3).mp4" type="video/mp4"/>
     
     </video> -->
        <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" 
        crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" 
        crossorigin="anonymous"></script>
    
        <script src="../App/script.js"></script>
        </body>
        </html>
}

export default App;
