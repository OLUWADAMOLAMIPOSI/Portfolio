  @media screen and (max-width: 960px) {
  .navbar_container{
     display: flex;
     justify-content: space-between;
     height: 80px;
     padding: 0;
     z-index: 1;
     width: 100%;
     max-width: 1300px; ;
  }
  .navbar_menu{
     display: grid;
     grid-template-columns: auto;
     margin: 0;
      position: absolute;
      width: 100%;
     /*top: -100px*/
     /*opacity: 1*/
     transition: all 0.5s ease;
     z-index: -1;
     background: #131313;
  }
}
.navbar_menu.active{
      background: #131313;
      opacity: 1;
      top: 100%;
      transition: all 0.5s ease;
      z-index: 99;
      height: 60vh;
      font-size: 1.6rem;
  }
  #navbar_logo{
     padding-left:25px;
  }
 .navbar_toogle .bar{
   width: 25px;
   height: 3px;
   margin:5px auto ;
   transition: all 0.3s ease ease-in-out;
   background: #fff;
 } 
 .navbar_item{
     width: 100%;
 }
   .navbar_links{
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
   }
   #mobile-menu  {
      position: absolute ;
      top:20%;
      right: 5%;
      transform: translate(5%, 20%);

   }

}