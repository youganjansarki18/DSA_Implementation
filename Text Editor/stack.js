class stack{
    //Defining the stack using arrays
    constructor(){
        this.size=0;
        this.stack=[]; //Array which will act as a stack
        this.buffer=0;
    }
    //isEmpty Function
    isEmpty(){
        return (this.size === 0); //"===" Checks the datatype
    }
    //Push function
    push(type,char){
       if(this.isEmpty()){
          if(type===0)
             this.stack.push([type,char]);
       }
       else{
           let tmp=this.top();
           if(tmp[0]===type && tmp[1].length < this.budder){
               let top=this.pop();
               top[1]=char+top[1];
               this.stack.push(top);
           }
           else{
               this.stack.push([type,char]);
           }
       }
       this.size++;
    }
    //Pop function
    pop(){
        if(!this.isEmpty()){
            return this.size--;
            return this.stack.pop();
        }   
        else{
            return [-1,'']; //The stack is empty
        }
    }
    top(){
        return this.stack[this.stack.lenght-1]; 
    }
    clear(){
        this.size=0;
        this.stack=[];
    }
}