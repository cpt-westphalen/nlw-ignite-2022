import ArrowIconLeft from '../assets/arrow-left.svg';
import ArrowIconRight from '../assets/arrow-right.svg';

export const ArrowButton = ({direction} : { direction: 'left' | 'right' }) => {
    return (
        <button>
            {
                direction === 'left' ?
                    <img src={ArrowIconLeft} alt=''/>
                    : <img src={ArrowIconRight} alt=''/>   
            }
        </button>
    )
}