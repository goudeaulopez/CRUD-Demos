import React from 'react'
import {Field, reduxForm} from 'redux-form'
import '../../styles/form.css' 

class FormProduct extends React.Component{
   state={image:null, preview:null}
   onSubmit = data => {
       const {firstname,lastname} = data
       //console.log(firstname,lastname,this.state.image)
      var formdata = new FormData();
         formdata.append('firstname',firstname)
         formdata.append('lastname',lastname)
         formdata.append('image',this.state.image)
      
         this.props.onSubmit(formdata)
   }
   
   inputText = data => {
      return(
          <div>
              <label>{data.label}</label>
              <input {...data.input}/>
          </div>
      )
   }  // {this.setState({image:event.target.files[0],preview:URL.createObjectURL(event.target.files[0])}) }}
   inputImage = data => {
        return(
            <div>
                <input type={data.type}  
                       onChange={(event)=>
                        {this.setState({image:event.target.files[0],preview:URL.createObjectURL(event.target.files[0])}) }}/>
            </div>
        )
   }

   render(){
      
       return(
           <div>
               <form onSubmit={this.props.handleSubmit(this.onSubmit)} encType="multipart/form-data">
                   <Field name="firstname" component={this.inputText} label="Enter Firstname" type="text"/>
                   <Field name="lastname" component={this.inputText} label="Enter Lastname" type="text"/>
                   <Field name="image" component={this.inputImage} type="file"  />
                   <button type="submit">submit</button>

               </form>
              <img src={this.state.preview} style={{width:100}}/>
               
           </div>
       )
   }
}
export default reduxForm({ 
  form:'myForm',
  multipartForm : true,
}) (FormProduct)





/*

https://www.pluralsight.com/guides/how-to-create-a-simple-form-submit-with-files



class FormProduct extends React.Component{
    state={file:null,name:'',preview:null}
    onSubmit = e =>{
        e.preventDefault();
        const formdata = new FormData()
       // formdata.append('Image',URL.createObjectURL(this.state.file))//
        formdata.append('Image',this.state.file)
        formdata.append('Firstname',this.state.name)
        this.props.onSubmit(formdata)
        console.log(this.state.file,this.state.name)
    }
    ImageDetails = e => {
        this.setState({file: e.target.files[0],preview:URL.createObjectURL(e.target.files[0])})
        
    }
    InputName = e =>{
        this.setState({name:e.target.value})
    }
    render(){
        return(
            <div>
               <form onSubmit={this.onSubmit} >
                  <input type="text" onChange={this.InputName}/>
                  <input type="file" onChange={this.ImageDetails}/>
                  <button type="submit">submit</button>
               </form>
                <img src={this.state.preview} style={{width:200}}/>
            </div>
        )
    }
}
export default FormProduct

*/
  /*  PersonalDetails=values=>{  ,
       return(
           <div>
               <label>{values.label}</label>
               <input {...values.input}/>
           </div>
       )
    }
    ImageDetails= event =>{
      this.setState({file:event.target.files[0]})   // )
    }
    onSubmit = values => {
      //  values.files = URL.createObjectURL(this.state.file)
        console.log(URL.createObjectURL(this.state.file))
        const formdata = new FormData()
         formdata.append('file',URL.createObjectURL(this.state.file))
       // formdata.append('file',this.state.file)
        this.props.onSubmit(values,formdata)
    }
    
    render(){  
        return(               
            <div>                         
                <form  onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Field 
                        name="FirstName"  
                        component={this.PersonalDetails} 
                        label="Enter Firstname" 
                        type="text"
                    />
                    <Field 
                        name="LastName" 
                        component={this.PersonalDetails} 
                        label="Enter Lastname"
                        type="text"
                    />
                     <input type="file" onChange={this.ImageDetails} name="file"/>
                    
                    <button>Create</button>
                </form>
              
            </div>
        )
    }
}
export default reduxForm({
  form:'SimpleForm'
})(FormProduct)
*/

//URL.createObjectURL(e.target.files[0])]


/*
<Field 
                        name="ImageProfile" 
                        component={this.ImageDetails} 
                        label="Add Image"
                       
                    />




import React from 'react'
import '../../styles/form.css'



class FormProduct extends React.Component{
    state={preview:null}
    
    renderImage = () =>{
        return this.state.preview ? require("../../defaultimages/defaultImage.png"):require("../../defaultimages/yochco.jpg")
    }

    render(){
        return(
                <div className="forma" >
                    <form className="ui form">
                    <div className="ui items" >
                       <div className="item">
                           <div className="image avatar ml-4 mt-4">
                               <img src={this.renderImage()} style={{width:150, height:150}}/>
                               <div className="wrapper">
                               <button><i className="plus icon"></i></button>
                                <input type="file"/> 
                               </div>  
                           </div>
                           <div className="content mt-4">
                             <div className="field mr-5 mt-3">
                                <label style={{fontSize:18}}>First Name</label>
                                <input type="text" name="first-name" placeholder="First Name"/>
                            </div>
                            <div className="field mr-5 mt-3">
                                <label style={{fontSize:18}}>Last Name</label>
                                <input type="text" name="first-name" placeholder="Last Name"/>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                
                   <div className="field mr-5 ml-5 mb-1">
                        <label className="pl-3 pb-1" style={{fontSize:18}}>About</label>
                        <textarea></textarea>
                        <br/> <br/>
                    </div>
                    <button id="button" className="btn btn-primary mb-4">submit</button>
                    </form>
              </div>
        )
    }
}
export default FormProduct



*/