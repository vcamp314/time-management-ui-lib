import React from 'react'
import type { item } from './Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import Dialog from '@mui/material/Dialog'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

interface TodoListProps {
  items: item[];
  open: boolean;
  onModalOpen: () => void;
  onModalClose: () => void;
  onAddTask: (event: React.FormEvent) => void;
  onCompleteTask: (todoId: number) => void;
  handleTextFieldChange: (newTask: string) => void;
  onDeleteClicked: (id: number) => void;
}

const Presenter = ({
  items,
  open,
  onModalOpen,
  onModalClose,
  onAddTask,
  onCompleteTask,
  handleTextFieldChange,
  onDeleteClicked,
}: TodoListProps): JSX.Element => {
  const displayItems = items.filter((item) => {
    return item.isVisible
  })
  return (
    <List sx={{ width: '100%', maxWidth: 1000, bgcolor: 'background.paper' }}>
      <Stack>
        <Typography gutterBottom align="center" variant="h4">
          My Tasks
        </Typography>
      </Stack>
      <Stack>
        {displayItems.map((item) => {
          const labelId = `checkbox-list-label-${item.id}`

          return (
            <ListItem
              sx={{ bgcolor: item.bgcolor }}
              key={item.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={(e) => {
                    onDeleteClicked(item.id)
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                    onClick={(e) => {
                      onCompleteTask(item.id)
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={`${item.text}`}
                  primaryTypographyProps={{ color: item.textColor }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </Stack>

      <IconButton edge="end" onClick={onModalOpen}>
        <AddCircleIcon sx={{ fontSize: 60 }} color="success" />
      </IconButton>
      <Dialog open={open} onClose={onModalClose} maxWidth={'md'} fullWidth>
        <DialogContent>
          <TextField
            autoFocus
            multiline
            maxRows={4}
            fullWidth
            onChange={(e) => {
              handleTextFieldChange(e.currentTarget.value)
            }}
          ></TextField>
        </DialogContent>
        <DialogContent>
          <Button variant="contained" onClick={onAddTask}>
            Add task
          </Button>
        </DialogContent>
      </Dialog>
    </List>
  )
}

export default Presenter
