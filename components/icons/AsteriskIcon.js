const AsteriskIcon = ({ size='24', fill = 'none', color = '#413F43' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_268_285)">
            <path d="M0 10.4H24V13.6H0V10.4Z" fill={color} />
            <path d="M10.4 0H13.6V24H10.4V0Z" fill={color}/>
            <path d="M4.64589 2.38332L21.6165 19.3539L19.3538 21.6166L2.3832 4.64601L4.64589 2.38332Z" fill={color}/>
            <path d="M19.3538 2.38343L21.6165 4.64612L4.64589 21.6167L2.3832 19.354L19.3538 2.38343Z" fill={color} />
        </g>
        <defs>
            <clipPath id="clip0_268_285">
                <rect width="24" height="24" fill="white" transform="matrix(-1 0 0 1 24 0)" />
            </clipPath>
        </defs>
    </svg>



)
export default AsteriskIcon;

