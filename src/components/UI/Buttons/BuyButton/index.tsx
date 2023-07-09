import React, { ReactChild } from 'react';
import './buyButton.Module.scss'
interface IProps{
	width:number,
	children: ReactChild | React.ReactNode
	svg?:boolean
}
const BuyButton = ({width,  children, svg }:IProps) => {
	return (
		<div style={{ width: width }} className='buy-button'>
			<svg
				style={{ display: svg ? '' : 'none' }}
				width='19'
				height='19'
				viewBox='0 0 19 19'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8.4601 16.59C8.46208 16.9069 8.36993 17.2172 8.19532 17.4816C8.02072 17.746 7.77153 17.9527 7.47935 18.0753C7.18717 18.198 6.86515 18.2311 6.55413 18.1705C6.2431 18.1099 5.95708 17.9583 5.73231 17.7349C5.50754 17.5115 5.35416 17.2265 5.29161 16.9158C5.22906 16.6052 5.26016 16.283 5.38096 15.99C5.50176 15.6971 5.70682 15.4466 5.97015 15.2704C6.23349 15.0941 6.54322 15 6.8601 15C7.28272 15 7.68818 15.1672 7.98795 15.4651C8.28772 15.763 8.45746 16.1674 8.4601 16.59ZM15.0501 15C14.7336 15 14.4243 15.0938 14.1612 15.2696C13.8981 15.4455 13.693 15.6953 13.5719 15.9877C13.4508 16.2801 13.4191 16.6018 13.4808 16.9121C13.5426 17.2225 13.695 17.5076 13.9187 17.7314C14.1425 17.9551 14.4276 18.1075 14.738 18.1693C15.0483 18.231 15.37 18.1993 15.6624 18.0782C15.9548 17.9571 16.2046 17.752 16.3804 17.4889C16.5563 17.2258 16.6501 16.9164 16.6501 16.6C16.6501 16.1757 16.4815 15.7687 16.1815 15.4686C15.8814 15.1686 15.4744 15 15.0501 15ZM17.7201 4C17.592 3.96709 17.4587 3.95991 17.3279 3.97886C17.197 3.99782 17.0712 4.04253 16.9578 4.11042C16.8443 4.17831 16.7454 4.26803 16.6669 4.37437C16.5883 4.48072 16.5316 4.6016 16.5001 4.73L14.8801 11.21C14.8253 11.4319 14.6963 11.6283 14.5143 11.7666C14.3324 11.9049 14.1085 11.9767 13.8801 11.97H8.0001C7.77166 11.9767 7.54784 11.9049 7.36589 11.7666C7.18394 11.6283 7.05485 11.4319 7.0001 11.21L4.4401 0.759997C4.38535 0.538121 4.25625 0.341692 4.0743 0.203411C3.89235 0.0651303 3.66853 -0.00665821 3.4401 -2.83489e-06H1.1001C0.834881 -2.83489e-06 0.580527 0.105354 0.392991 0.29289C0.205455 0.480427 0.100098 0.734781 0.100098 0.999997C0.100098 1.26521 0.205455 1.51957 0.392991 1.7071C0.580527 1.89464 0.834881 2 1.1001 2H2.6901L5.1201 11.73C5.28152 12.3736 5.65177 12.9455 6.17289 13.3563C6.69401 13.767 7.3366 13.9934 8.0001 14H13.8801C14.5487 14 15.1982 13.7767 15.7255 13.3654C16.2527 12.9542 16.6274 12.3786 16.7901 11.73L18.4101 5.24C18.4467 5.11327 18.4578 4.98056 18.4429 4.84951C18.428 4.71846 18.3873 4.59166 18.3232 4.4764C18.259 4.36115 18.1727 4.25972 18.0692 4.17795C17.9657 4.09619 17.8471 4.03571 17.7201 4ZM8.7201 7H10.0001V8.25C10.0001 8.51521 10.1055 8.76957 10.293 8.9571C10.4805 9.14464 10.7349 9.25 11.0001 9.25C11.2653 9.25 11.5197 9.14464 11.7072 8.9571C11.8947 8.76957 12.0001 8.51521 12.0001 8.25V7H13.2601C13.5253 7 13.7797 6.89464 13.9672 6.7071C14.1547 6.51957 14.2601 6.26521 14.2601 6C14.2601 5.73478 14.1547 5.48043 13.9672 5.29289C13.7797 5.10535 13.5253 5 13.2601 5H12.0001V3.75C12.0001 3.48478 11.8947 3.23043 11.7072 3.04289C11.5197 2.85535 11.2653 2.75 11.0001 2.75C10.7349 2.75 10.4805 2.85535 10.293 3.04289C10.1055 3.23043 10.0001 3.48478 10.0001 3.75V5H8.7601C8.49488 5 8.24053 5.10535 8.05299 5.29289C7.86546 5.48043 7.7601 5.73478 7.7601 6C7.7601 6.26521 7.86546 6.51957 8.05299 6.7071C8.24053 6.89464 8.49488 7 8.7601 7H8.7201Z'
					fill='white'
				/>
			</svg>
			{children} 
		</div>
	)
};

export default BuyButton;