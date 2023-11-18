import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export const ForthPage = () => {
  return (
    <>
      <div
        className="w3-col inspirational-quote-wrapper"
        style={{ height: "90vh" }}
      >
        <div className="w3-col">
          <div className="w3-content">
            <div className="w3-container">
              <div className="inspirational-quote-container">
                <h2>Stay motivated and inspired:</h2>
                <div className="each-quotes">
                <div className="w3-col l4 w3-padding">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        className="quote-img"
                        component="img"
                        height="100"
                        image="/images/Home/albert.jpg"
                        alt="Albert Schweitzer"
                      />
                      <CardContent>
                        <Typography className="quote" gutterBottom variant="h5" component="div">
                        "Success is not the key to happiness. Happiness is the key to success." 
                        </Typography>
                        <Typography className="quote-name" variant="body2" color="text.secondary">
                          Albert Schweitzer
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <div className="quote-gap"></div>
                  <Card className="hide-quote" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        className="quote-img"
                        component="img"
                        height="100"
                        image="/images/Home/sam.jpeg"
                        alt="Sam Levenson"
                      />
                      <CardContent>
                        <Typography className="quote" gutterBottom variant="h5" component="div">
                        "Don't watch the clock; do what it does. Keep going." 
                        </Typography>
                        <Typography className="quote-name" variant="body2" color="text.secondary">
                        Sam Levenson
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
                <div className="w3-col l4 w3-padding">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        className="quote-img"
                        component="img"
                        height="100"
                        image="/images/Home/churchill.webp"
                        alt="Winston Churchill"
                      />
                      <CardContent>
                        <Typography className="quote" gutterBottom variant="h5" component="div">
                        "The best way to get things done is to simply begin." 
                        </Typography>
                        <Typography className="quote-name" variant="body2" color="text.secondary">
                          Winston Churchill
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <div className="quote-gap"></div>
                  <Card className="hide-quote" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        className="quote-img"
                        component="img"
                        height="100"
                        image="/images/Home/C.s.lewis.jpeg"
                        alt="C.S Lewis"
                      />
                      <CardContent>
                        <Typography className="quote" gutterBottom variant="h5" component="div">
                        "You are never too old to set another goal or to dream a new dream."
                        </Typography>
                        <Typography className="quote-name" variant="body2" color="text.secondary">
                          C.S Lewis
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
                <div className="w3-col l4 w3-padding">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        className="quote-img"
                        component="img"
                        height="100"
                        image="/images/Home/steve.jpg"
                        alt="Steve Jobs"
                      />
                      <CardContent>
                        <Typography className="quote" gutterBottom variant="h5" component="div">
                          "The only way to do great work is to love what you
                          do."
                        </Typography>
                        <Typography className="quote-name" variant="body2" color="text.secondary">
                          Steve Jobs
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <div className="quote-gap"></div>
                  <Card className="hide-quote" sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                      <CardMedia
                        className="quote-img"
                        component="img"
                        height="100"
                        image="/images/Home/benneth.jpg"
                        alt="Bo Benneth"
                      />
                      <CardContent>
                        <Typography className="quote" gutterBottom variant="h5" component="div">
                        "Success is not in what you have, but who you are."
                        </Typography>
                        <Typography className="quote-name" variant="body2" color="text.secondary">
                          Bo Benneth
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
