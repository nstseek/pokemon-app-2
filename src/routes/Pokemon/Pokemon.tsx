import {
    Card,
    CardContent,
    Typography,
    CardMedia,
    CircularProgress,
} from '@mui/material';
import _ from 'lodash';
import React from 'react';
import { useParams } from 'react-router';
import { useGetPokemonDetails } from './hooks/useGetPokemonDetails';
import { Wrapper } from './Pokemon.styled';

export const Pokemon: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { isLoading, data: pokemon } = useGetPokemonDetails({ id });

    return (
        <Wrapper>
            {isLoading ? (
                <CircularProgress style={{ margin: 'auto' }} />
            ) : (
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={
                            pokemon?.sprites.other['official-artwork']
                                .front_default
                        }
                        title={pokemon?.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {_.capitalize(pokemon?.name)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The API does not provide a description, only lots of
                            links and pictures
                        </Typography>
                    </CardContent>
                </Card>
            )}
        </Wrapper>
    );
};
