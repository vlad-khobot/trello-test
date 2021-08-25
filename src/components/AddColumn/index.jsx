import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import { addColumn } from '../../store/actions'
const StyledButton = styled.button`
  width: 120px;
`
const AddColumn = () => {
  function checkLength(item) {
    if (!item) return
    if (item.length > 25) return item.substring(0, 25) + '...'
    return item
  }
  const dispatch = useDispatch()
  const addColumnFunc = useCallback(() => {
    const answer = checkLength(window.prompt('Enter column name')?.trim())
    if (!answer) return
    dispatch(addColumn(answer))
    setTimeout(() => {
      window.scrollTo(document.body.scrollWidth, 0)
    }, 1)
  }, [dispatch])

  return (
    <StyledButton
      className='btn btn-block btn-secondary'
      onClick={addColumnFunc}
    >
      Add Column
    </StyledButton>
  )
}
export default AddColumn
