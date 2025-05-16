import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./info.css";
function Info({info}) {
    return (
        <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <div>
                            Temperature: {info.temp}&deg;C
                        </div>
                        <div className="temp-container">
                            <div className="temp-item">
                                <div className="temp-label">Min Temp</div>
                                <div className="temp-value">{info.tempMin}&deg;C</div>
                            </div>
                            <div className="temp-item">
                                <div className="temp-label">Max Temp</div>
                                <div className="temp-value">{info.tempMax}&deg;C</div>
                            </div>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Info;