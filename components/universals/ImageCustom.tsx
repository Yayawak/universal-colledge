import Image from "next/image";

interface ImageCustomProps {
    src: string;
}
export const ImageCustom: React.FC<ImageCustomProps>  = ({ src }) => {
    return (
        <Image
            src={src}
            alt={src}
            width={500}
            height={300}
        />
    )
}
