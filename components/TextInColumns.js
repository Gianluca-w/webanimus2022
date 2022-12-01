const TextInColumns = ({ TitleColumn, ColumnContents, ColumnSize = 3, RowSize = 1, MainStyle = "White" }) => (
    <div className={`ColumnTextWrapper MainStyle${MainStyle}`}>
        <TextInColumnsTitleText Content={TitleColumn} />
        <ColumnContentText Content={ColumnContents} Columns={ColumnSize} Rows={RowSize}></ColumnContentText>
    </div>
);
const TextInColumnsTitleText = ({ Content }) => {
    return <div>
        {Content && <div className="ColumnsTextTitle"><strong> {Content} </strong></div>}

    </div>
}
const ColumnContentText = ({ Content, Columns, Rows }) => {
    return <div className={`ColumnContentGrid ColumnSize${Columns} RowSize${Rows}`}>
        {Content && Content.map((Text) => (
            <div className={`ColumnContentWrapper ColumnContentPosition${Text.TextPosition}`} key={Text.TextPosition} >
                <div >
                    {Text.InnerTitle && <div className="ColumnContentTitle"><strong>{Text.InnerTitle}</strong></div>}
                    <div className="ColumnContentText">{Text.body}</div>
                </div>
            </div>
        ))
        }
    </div>
}
export default TextInColumns