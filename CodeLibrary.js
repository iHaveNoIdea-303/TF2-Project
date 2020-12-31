function isTouching(ojb1,ojb2,ojb1w,ojb1h,ojb2w,ojb2h){
    if(ojb1.position.x-ojb2.position.x<(ojb1w+ojb2w) &&  
  ojb2.position.x-ojb1.position.x<(ojb1w+ojb2w) && 
  ojb1.position.y-ojb2.position.y<(ojb1h+ojb2h) &&
  ojb2.position.y-ojb1.position.y<(ojb1h+ojb2h)){
    return true
  }
  else{
   return false
  }
  }
  
  function bounceOff(ojb1,ojb2){
    if(ojb1.x-ojb2.x<(ojb1.width+ojb2.width)/2 &&  
  ojb1.x-ojb2.x<(ojb1.width+ojb2.width)/2){
    Matter.Body.applyForce(ojb1,{x:-60,y:-10})
   ojb1.velocityX=ojb2.velocityX*(-1);
  }
  if (ojb1.y-ojb2.y<(ojb1.height+ojb2.height)/2 &&
  ojb1.y-ojb2.y<(ojb1.height+ojb2.height)/2){
    ojb1.velocityY=ojb2.velocityY*(-1);
    ojb1.velocityY=ojb2.velocityY*(-1);
  }
  }

 