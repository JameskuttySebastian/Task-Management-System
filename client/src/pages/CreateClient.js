import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from "react-places-autocomplete";
import { useForm } from "react-hook-form";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import API from "../utils/API/API";
import swal from "sweetalert";
import UserContext from "../utils/context/UserContext";
import { Container } from "@material-ui/core";
require("dotenv").config();

const api_key = process.env.GOOGLE_API_KEY;
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1),
            marginTop: 20,
            width: "100%",
        },
    },
}));
function CreateClient() {
    const { accessToken } = useContext(UserContext);
    const classes = useStyles();
    const { register, handleSubmit, errors, reset } = useForm();
    const [location, setLocation] = React.useState("");
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null,
        placeID: null
    });
    const [address, setAddress] = React.useState('')

    const handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const bestMathcedResult = results[0];
        const latLng = await getLatLng(bestMathcedResult);
        let loc = {
            lat: latLng.lat,
            lng: latLng.lng,
            placeID: bestMathcedResult.place_id
        }
        console.log(bestMathcedResult);
        setLocation(value);
        setCoordinates(loc);
        setAddress(bestMathcedResult.formatted_address);
    };

    const onError = (status, clearSuggestions) => {
        console.log('Google Maps API returned error with status: ', status)
        clearSuggestions();
    }

    const handleInputChange = event => {
        setLocation(event);
        if (location === "") {
            //Clear
            localStorage.clear();
        }
    }
    const onSubmit = (data) => {
        data = {
            ...data,
            status: "Active",
        };
        console.log(data);

        API.apiCreateClient(data, accessToken)
            .then((response) => {
                console.log(response);
                swal("Client Record Created Sucessfully!");
            })
            .catch((err) => {
                console.log(err);
                swal("oooooPs,,,,,Error!");
            });
        reset();
    };
    return (
        <div>
            <Container maxWidth="sm">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className={classes.root}
                    noValidate
                    autoComplete="off"
                    style={{ margin: "auto", textAlign: "justify", paddingTop: 100 }}
                >
                    <h2 style={{ clear: "both" }}>CLIENT CREATION FORM</h2>
        
                        <PlacesAutocomplete
                            value={location}
                            onChange={handleInputChange}
                            onSelect={handleSelect}
                            onError={onError}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            
                                    <div>
                                        <TextField style = {{width: '100%'}}{...getInputProps({ placeholder: "Search address" })}
                                            id="name"
                                            variant="outlined"
                                            label="Client Name"
                                            name="name"
                                            inputRef={register({ required: true })}
                                        />
                                        {loading ? <div>...loading</div> : null}

                                        {suggestions.map(suggestion => {
                                            const style = {
                                                backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                            };

                                            return (
                                                <div {...getSuggestionItemProps(suggestion, { style })}>
                                                    {suggestion.description}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    )}
                        </PlacesAutocomplete>
                        <TextField
                            value={address}
                            id="address"
                            variant="outlined"
                            label="Address"
                            name="address"
                            inputRef={register({ required: true })}
                        />
                        <TextField
                            id="email"
                            variant="outlined"
                            label="Email Address"
                            name="email"
                            inputRef={register({
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Invalid email address",
                                },
                            })}
                        />

                        {errors.email && (
                            <h4 style={{ color: "red" }}>{errors.email.message}</h4>
                        )}
                         <Typography style={{ textAlign: 'right', fontWeight: '900' }}>
                            {
                                coordinates.lat && coordinates.lng ?
                                    <a href={`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}&query_place_id=${coordinates.placeID}&key=${api_key}&libraries=places`}
                                        target="_blank" rel="noreferrer noopener">
                                        View Location in Maps</a>
                                    :
                                    null
                            }
                        </Typography>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ clear: "both", marginTop: 50 }}
                        >
                            SUMBIT
                        </Button>
                </form>
            </Container>
        </div>
    );
}

export default CreateClient;