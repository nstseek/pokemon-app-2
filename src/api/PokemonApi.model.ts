export const queryKeyTypeGuard = (
    queryKey:
        | readonly unknown[]
        | [string]
        | [string, '', number, number]
        | [string, string, number, number],
): queryKey is [string, '', number, number] => queryKey[1] === '';
