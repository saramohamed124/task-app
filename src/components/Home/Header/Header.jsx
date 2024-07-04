import header_img from './assets/imgs/Task-header_img.gif'
import Content from './Content'
function Header(){
    return(
        <div className='flexbox text-center flex-wrap' style={{margin:'auto'}}>
            <img className='max-w-[100%] flex-[0.5]' src={header_img} alt='header-img'></img>
            <Content/>
        </div>
    )
}
export default Header