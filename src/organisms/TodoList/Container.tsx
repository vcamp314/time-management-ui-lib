import React, { useState } from 'react'
import Presenter from './Presenter'

export interface item {
  id: number;
  text: string;
  textColor: string;
  bgcolor: string;
  isVisible: boolean;
}

const Container = (): JSX.Element => {
  const [items, setItems] = useState<item[]>([
    {
      id: 0,
      text: 'Item 1',
      textColor: 'normal',
      bgcolor: 'white',
      isVisible: true,
    },
    {
      id: 1,
      text: 'Item 2',
      textColor: 'normal',
      bgcolor: 'white',
      isVisible: true,
    },
  ])
  const [open, setOpen] = useState<boolean>(false)
  const [newItem, setNewItem] = useState<string>()

  const handleTextFieldChange = (value: string): void => {
    setNewItem(value)
  }

  const onAddTask = (): void => {
    onModalClose()
    if (newItem !== undefined)
      setItems((prevItems) => [
        ...prevItems,
        {
          id: Math.random(),
          text: newItem,
          textColor: 'normal',
          bgcolor: 'white',
          isVisible: true,
        },
      ])
  }

  const onModalOpen = (): void => {
    setOpen(true)
  }

  const onModalClose = (): void => {
    setOpen(false)
  }

  const onDeleteClicked = (id: number): void => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    onRemoveTask(id)
  }

  const onRemoveTask = (id: number): void => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          item.isVisible = false
          return item
        } else return item
      }),
    )
  }

  const onCompleteTask = (id: number): void => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          item.textColor = 'gray'
          item.bgcolor = 'rgb(235, 235, 235)'
          return item
        } else {
          return item
        }
      }),
    )
    window.setTimeout(() => {
      onRemoveTask(id)
    }, 2000)
  }

  return (
    <>
      <Presenter
        items={items}
        open={open}
        onModalOpen={onModalOpen}
        onModalClose={onModalClose}
        onAddTask={onAddTask}
        onCompleteTask={onCompleteTask}
        handleTextFieldChange={handleTextFieldChange}
        onDeleteClicked={onDeleteClicked}
      />
    </>
  )
}

export default Container
