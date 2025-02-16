type LineBreaksProps = {
  num: number
}

const LineBreaks:React.FC<LineBreaksProps> = ({ num }):JSX.Element => {
  return <>
    {
      Array.from({ length: num }).map((_, i) => <br key={i} />)
    }
  </>
}

export default LineBreaks;