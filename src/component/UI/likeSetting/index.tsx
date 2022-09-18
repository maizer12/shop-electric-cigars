import React from 'react';
import './likeSetting.Module.scss'
const LikeSetting = () => {
	return (
		<div className='like-setting'>
			<div className='like-setting__item'>
				<svg
					width='23'
					height='21'
					viewBox='0 0 23 21'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M16.495 0.622516C14.9685 0.621826 13.495 1.18238 12.355 2.19752C12.1199 2.40783 11.8155 2.5241 11.5 2.5241C11.1845 2.5241 10.8801 2.40783 10.645 2.19752C9.74533 1.39672 8.63324 0.873239 7.44279 0.690166C6.25234 0.507093 5.03435 0.672245 3.93564 1.16571C2.83692 1.65918 1.90439 2.45991 1.25044 3.47136C0.596499 4.48281 0.249057 5.66182 0.250002 6.86627C0.250002 12.21 8.4625 18.465 10.8475 20.175C11.038 20.3107 11.2661 20.3836 11.5 20.3836C11.7339 20.3836 11.962 20.3107 12.1525 20.175C14.5375 18.465 22.75 12.21 22.75 6.86627C22.747 5.20929 22.0867 3.62119 20.914 2.45058C19.7413 1.27998 18.152 0.622513 16.495 0.622516ZM11.5 17.8575C6.92125 14.4825 2.5 9.88127 2.5 6.86627C2.50305 6.09747 2.72732 5.3458 3.14601 4.70101C3.56471 4.05622 4.16014 3.54557 4.8612 3.23003C5.56227 2.91449 6.33934 2.8074 7.09962 2.92155C7.8599 3.0357 8.57126 3.36626 9.14875 3.87377C9.79481 4.45328 10.6321 4.77379 11.5 4.77379C12.3679 4.77379 13.2052 4.45328 13.8513 3.87377C14.4287 3.36626 15.1401 3.0357 15.9004 2.92155C16.6607 2.8074 17.4377 2.91449 18.1388 3.23003C18.8399 3.54557 19.4353 4.05622 19.854 4.70101C20.2727 5.3458 20.497 6.09747 20.5 6.86627C20.5 9.88127 16.0788 14.46 11.5 17.8575Z'
						fill='#D0D0D0'
					/>
				</svg>
			</div>
			<div className='like-setting__item'>
				<svg
					width='27'
					height='27'
					viewBox='0 0 27 27'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M6.7499 14.8275V4.5C6.7499 4.20163 6.63138 3.91548 6.4204 3.7045C6.20942 3.49353 5.92327 3.375 5.6249 3.375C5.32653 3.375 5.04039 3.49353 4.82941 3.7045C4.61843 3.91548 4.4999 4.20163 4.4999 4.5V14.8275C3.84836 15.064 3.28542 15.4953 2.8876 16.0629C2.48978 16.6305 2.27637 17.3069 2.27637 18C2.27637 18.6931 2.48978 19.3695 2.8876 19.9371C3.28542 20.5047 3.84836 20.936 4.4999 21.1725V22.5C4.4999 22.7984 4.61843 23.0845 4.82941 23.2955C5.04039 23.5065 5.32653 23.625 5.6249 23.625C5.92327 23.625 6.20942 23.5065 6.4204 23.2955C6.63138 23.0845 6.7499 22.7984 6.7499 22.5V21.1725C7.40145 20.936 7.96439 20.5047 8.36221 19.9371C8.76003 19.3695 8.97344 18.6931 8.97344 18C8.97344 17.3069 8.76003 16.6305 8.36221 16.0629C7.96439 15.4953 7.40145 15.064 6.7499 14.8275ZM5.6249 19.125C5.4024 19.125 5.18489 19.059 4.99989 18.9354C4.81488 18.8118 4.67069 18.6361 4.58554 18.4305C4.50039 18.225 4.47811 17.9988 4.52152 17.7805C4.56493 17.5623 4.67207 17.3618 4.82941 17.2045C4.98674 17.0472 5.1872 16.94 5.40543 16.8966C5.62366 16.8532 5.84986 16.8755 6.05542 16.9606C6.26099 17.0458 6.43669 17.19 6.56031 17.375C6.68392 17.56 6.7499 17.7775 6.7499 18C6.7499 18.2984 6.63138 18.5845 6.4204 18.7955C6.20942 19.0065 5.92327 19.125 5.6249 19.125ZM14.6249 5.8275V4.5C14.6249 4.20163 14.5064 3.91548 14.2954 3.7045C14.0844 3.49353 13.7983 3.375 13.4999 3.375C13.2015 3.375 12.9154 3.49353 12.7044 3.7045C12.4934 3.91548 12.3749 4.20163 12.3749 4.5V5.8275C11.7234 6.06398 11.1604 6.49533 10.7626 7.06294C10.3648 7.63054 10.1514 8.30687 10.1514 9C10.1514 9.69313 10.3648 10.3695 10.7626 10.9371C11.1604 11.5047 11.7234 11.936 12.3749 12.1725V22.5C12.3749 22.7984 12.4934 23.0845 12.7044 23.2955C12.9154 23.5065 13.2015 23.625 13.4999 23.625C13.7983 23.625 14.0844 23.5065 14.2954 23.2955C14.5064 23.0845 14.6249 22.7984 14.6249 22.5V12.1725C15.2765 11.936 15.8394 11.5047 16.2372 10.9371C16.635 10.3695 16.8484 9.69313 16.8484 9C16.8484 8.30687 16.635 7.63054 16.2372 7.06294C15.8394 6.49533 15.2765 6.06398 14.6249 5.8275ZM13.4999 10.125C13.2774 10.125 13.0599 10.059 12.8749 9.9354C12.6899 9.81179 12.5457 9.63609 12.4605 9.43052C12.3754 9.22495 12.3531 8.99875 12.3965 8.78052C12.4399 8.56229 12.5471 8.36184 12.7044 8.2045C12.8617 8.04717 13.0622 7.94002 13.2804 7.89662C13.4987 7.85321 13.7249 7.87549 13.9304 7.96064C14.136 8.04578 14.3117 8.18998 14.4353 8.37498C14.5589 8.55999 14.6249 8.7775 14.6249 9C14.6249 9.29837 14.5064 9.58452 14.2954 9.7955C14.0844 10.0065 13.7983 10.125 13.4999 10.125ZM24.7499 14.625C24.7503 13.9268 24.5341 13.2456 24.1311 12.6754C23.7281 12.1052 23.1582 11.674 22.4999 11.4412C22.5053 11.3776 22.5053 11.3136 22.4999 11.25V4.5C22.4999 4.20163 22.3814 3.91548 22.1704 3.7045C21.9594 3.49353 21.6733 3.375 21.3749 3.375C21.0765 3.375 20.7904 3.49353 20.5794 3.7045C20.3684 3.91548 20.2499 4.20163 20.2499 4.5V11.25C20.2445 11.3136 20.2445 11.3776 20.2499 11.4412C19.5945 11.6755 19.0276 12.1066 18.6268 12.6755C18.2259 13.2445 18.0108 13.9234 18.0107 14.6194C18.0107 15.3153 18.2259 15.9943 18.6268 16.5632C19.0276 17.1322 19.5945 17.5633 20.2499 17.7975V22.5C20.2499 22.7984 20.3684 23.0845 20.5794 23.2955C20.7904 23.5065 21.0765 23.625 21.3749 23.625C21.6733 23.625 21.9594 23.5065 22.1704 23.2955C22.3814 23.0845 22.4999 22.7984 22.4999 22.5V17.7975C23.1564 17.5654 23.725 17.1359 24.1278 16.5679C24.5307 16 24.7479 15.3213 24.7499 14.625ZM21.3749 15.75C21.1524 15.75 20.9349 15.684 20.7499 15.5604C20.5649 15.4368 20.4207 15.2611 20.3355 15.0555C20.2504 14.85 20.2281 14.6238 20.2715 14.4055C20.3149 14.1873 20.4221 13.9868 20.5794 13.8295C20.7367 13.6722 20.9372 13.565 21.1554 13.5216C21.3737 13.4782 21.5999 13.5005 21.8054 13.5856C22.011 13.6708 22.1867 13.815 22.3103 14C22.4339 14.185 22.4999 14.4025 22.4999 14.625C22.4999 14.9234 22.3814 15.2095 22.1704 15.4205C21.9594 15.6315 21.6733 15.75 21.3749 15.75Z'
						fill='#D0D0D0'
					/>
				</svg>
			</div>
		</div>
	)
};

export default LikeSetting;