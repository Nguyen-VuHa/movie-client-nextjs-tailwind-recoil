
export const configHeaderAxios = ({ params, headers }) => {
    return {
        headers: { ...headers },
        params: params,
    }
}