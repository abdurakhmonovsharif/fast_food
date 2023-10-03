
const MyCheckBox = ({
    checked,

}: {
    checked: boolean,
}
) => {
    return (
        <div className='border w-4 h-4 rounded-sm p-[3px]'>
            <div className={`${checked && 'bg-global_yellow'} w-full h-full`}></div>
        </div>
    )
}

export default MyCheckBox
