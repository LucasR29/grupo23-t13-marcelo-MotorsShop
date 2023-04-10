import { Box, Button, Container, Flex, Heading, Image, Text, Textarea } from "@chakra-ui/react"
import { currency } from "../adsDetail"
import { adCommentSection } from "./commentSection"

export const adMainInfo = (adToShow: any) => {
    return (
        <Box marginLeft={['0%', '0%', '3%', '7%']} marginTop={10} width={['90%', '85%', '57%']} marginRight={0}>
            <Flex direction={'column'} w={'100%'} gap={10}>
                <Box backgroundColor={'white'} w={'100%'} borderRadius={5} display={'flex'} justifyContent={"center"} p={'50px'}>
                    <Image src={adToShow.cover_image} objectFit={'cover'} />
                </Box>
                <Box backgroundColor={'white'} width={'100%'} borderRadius={5} p={7} display={'flex'} flexDirection={'column'} gap={7}>
                    <Heading marginBottom={10} as='h2' size={'md'}>
                        {`${adToShow.brand} ${adToShow.model}`}
                    </Heading>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Box display={'flex'} gap={3} alignItems={'center'}>
                            <Button h={'30px'} backgroundColor={'brand4'} color={'brand2'}>{adToShow.year}</Button>
                            <Button h={'30px'} backgroundColor={'brand4'} color={'brand2'}>{adToShow.mileage}</Button>
                        </Box>
                        <Text color={"gray.800"} fontWeight={600}>{`${currency(adToShow.price)}`}</Text>
                    </Box>
                    <Button backgroundColor={'brand2'} w={'100px'} h={'40px'} color={"white"}>Comprar</Button>
                </Box>
                <Box backgroundColor={'white'} width={'100%'} borderRadius={5} p={7} display={'flex'} flexDirection={'column'} gap={7}>
                    <Heading marginBottom={10} as='h2' size={'md'}>
                        Descrição
                    </Heading>
                    <Text>
                        {adToShow.description}
                    </Text>
                </Box>
                {adCommentSection(adToShow, ['none', null, 'block'])}
            </Flex >
        </Box >
    )
}