import { Grid } from "@mantine/core";

export const OneOpponent = () => {
    return (
        <Grid columns={12}>
            <Grid.Col span={2}>1</Grid.Col>
            <Grid.Col span={2}>2</Grid.Col>
            <Grid.Col span={8}>3</Grid.Col>
        </Grid>
    );
}