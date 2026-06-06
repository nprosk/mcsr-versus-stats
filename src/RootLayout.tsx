// layouts/RootLayout.tsx
import { Outlet } from 'react-router-dom';
import { AppShell, Group, Text } from '@mantine/core';

export const RootLayout = () => {
    return (
        <AppShell header={{ height: 60 }}>
            <AppShell.Header styles={{ header: { position: 'absolute' } }}>
                <Group justify="center" h="100%">
                    <Text size="xl" fw={700}>MCSR Versus Stats</Text>
                </Group>
            </AppShell.Header>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
}