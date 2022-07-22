import  React  from "react";
class TButton extends React.Component {
   
    render() {
        return (
           <>
               <a href={this.props.link} className='text-white text-lg inline-block   py-4 px-10 font-bold rounded-md bg-gradient-to-b hover:cursor-pointer from-regal-green to-regal-blue hover:bg-none hover:bg-regal-green'>
                {this.props.name}
               </a>
           </>
        )
    }

}

export default TButton;