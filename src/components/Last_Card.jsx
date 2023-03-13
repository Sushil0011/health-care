import React from 'react'
import symbole from '../Assests/chatsymbole.svg';
import user1 from '../Assests/user1.svg';
import user2 from '../Assests/girls.svg';


const User = () => {
    return (
        <>
            <div className='lcard'>
                <div className='user1'>
                    <img src={user1} alt="" />

                </div>
                <div className='user2'>
                <img src={user2} alt="" />

                </div>
                <div className='inner'>


                    <div className='innerInfo'>
                        <div className='chat'>

                            <div className='bar-container'>
                                <div className='fbar'></div>
                                <div className='sbar'></div>
                                <div className='lbar'></div>
                            </div>
                            <img className='symbol' src={symbole} alt='' />

                        </div>

                        <div className='chat2'>

                        <div className='bar-container'>
                                <div className='fbar'></div>
                                <div className='sbar'></div>
                                <div className='lbar'></div>
                            </div>
                            <img className='symbol2' src={symbole} alt='' />

                        </div>


                    </div>
                    <div className='bottomLine'></div>
                </div>
            </div>

            <div className='user_info'>
                <div className='para1'>Improve patient experience engaging the way they want.</div>
                <div className='para2'>90% People prefer texts to phone calls.</div>
            </div>

        </>



    )
}

export default User