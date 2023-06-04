import { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {Box,List,ListItem,ListItemText,Typography,useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../Theme";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const Schedule = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        <Topbar />
          <Box m="20px">
            <Header title="SCHEDULER" subtitle="Plan Out Your Own Shedule" />

            <Box display="flex" justifyContent="space-between">
              
              <Box
                flex="1 1 20%"
                backgroundColor={colors.primary[400]}
                p="15px"
                borderRadius="4px"
              >
                <Typography variant="h5">Events</Typography>
                <List>
                  {currentEvents.map((event) => (
                    <ListItem
                      key={event.id}
                      sx={{
                        backgroundColor: colors.greenAccent[500],
                        margin: "10px 0",
                        borderRadius: "2px",
                      }}
                    >
                      <ListItemText
                        primary={event.title}
                        secondary={
                          <Typography>
                            {formatDate(event.start, {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </Typography>
                        }
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>

              {/* CALENDAR */}
              <Box flex="1 1 100%" ml="15px">
                <FullCalendar
                  height="75vh"
                  plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin,
                  ]}
                  initialView="dayGridMonth"
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  select={handleDateClick}
                  eventClick={handleEventClick}
                  eventsSet={(events) => setCurrentEvents(events)}
                  initialEvents={[
                    {
                      id: "12315",
                      title: "English Quiz",
                      date: "2023-05-15",
                    },
                    {
                      id: "5123",
                      title: "Maths SA",
                      date: "2023-05-29",
                    },
                    {
                      id: "3",
                      title: "Mandarin SA",
                      date: "2023-05-29",
                    },
                    {
                      id: "13",
                      title: "Chemistry SA",
                      date: "2023-06-02",
                    },
                    {
                      id: "35",
                      title: "PKN SA",
                      date: "2023-06-02",
                    },
                  ]}
                />
              </Box>
            </Box>
          </Box>
      </main>
    </div>
    
  );
};

export default Schedule;
