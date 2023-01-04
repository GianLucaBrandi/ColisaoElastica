var n = 0;
function setup() { 

  
  createCanvas(800,400); 
  
  c1 = new bloco(400,-0.4,1000000,255);
  c2 = new bloco(200,0,1,100); 
  

}

function draw() {
  
  background(0);
  stroke(250);
  line(0,225,800,225);
  
  if ( c1.x -25 <= 0 || c2.x -25 <=0 ) { 
       n=n+1;   
       print(n);
   }
  
  colisao(c1,c2);
  
  
  
  c1.mostrar(); 
  c1.movimento();
  c1.parede(n);
  
  c2.mostrar(); 
  c2.movimento();
  c2.parede(n);
  
   
  
  
  
}

class bloco { 
  
  constructor (x,v,m,c) { 
  
    this.x = x;  
    this.v = v;   
    this.m = m;
    this.c = c;
    
  }

  movimento() { 
  
    this.x = this.x + this.v ;  
  
  }
  
  mostrar() { 
  
    rectMode(CENTER);
    fill(this.c) ; 
    rect(this.x,200,50,50);
  } 

  parede() {
    
     if ( this.x -25 <= 0) { 
        
     this.v = -this.v; 
       
     }
    
  

  }
  
}

function colisao ( ob1, ob2)  { 
  

  
    if ( ob1.x - 25 <= ob2.x + 25)  { 
      
      n=n+1;
      
      
      
      n1 = (ob1.v*(ob1.m - ob2.m) + 2*ob2.v*ob2.m);
      d1 = (ob1.m + ob2.m) ;      
      n2 =(ob2.v*(ob2.m - ob1.m) + 2*ob1.v*ob1.m);
      d2 = (ob1.m + ob2.m) ;  
      
     
      
      print(n);
      ob1.v = n1/d1;  
      ob2.v = n2/d2;
    
      
        }
    
  }
  