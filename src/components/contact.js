import './main.css'
const Contact = () =>{
    return(
        <>

        <div className='container contact'>
            <h1>Contact us</h1>
            <div class="icons padding">
                <a href="https://www.instagram.com/k66a5hus/" title="K66 A5- KHDL ^_^">
                <i className="fa fa-sharp fa-brands fa-instagram fa-xl" style={{color:'#323286' ,fontSize: '80px'  }}></i>
                </a>

                <form action="mailto:hanampy@gmail.com" method="post" 
                enctype="text/plain"
                title="Mail"
                >
                <i className="fa fa-sharp fa-regular fa-envelope fa-xl" style={{color:'#323286', fontSize: '80px' }}></i>
                </form>

                <a
                href="https://github.com/hausura/Gender_Recognition_By_Voice"
                title="Contact to Contributor"
                >
                <i className="fa fa-sharp fa-brands fa-github fa-xl" style={{color:'#323286', fontSize: '80px' }}></i>
                </a>
                <a href="https://www.facebook.com/nana.2403.03" title="Nam Anh info">
                <i className="fa fa-sharp fa-brands fa-facebook fa-xl" style={{color:'#323286', fontSize: '80px' }}></i>
                </a>
                <a href="" title="0396500523">
                <i className="fa fa-sharp fa-solid fa-phone fa-xl" style={{color:'#323286', fontSize: '80px' }}></i>
                </a>
            </div>
        </div>
        </>
    )
}
export default Contact

