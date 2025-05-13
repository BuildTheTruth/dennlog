import {
  WUTHERINGWAVES_CHARACTER_BY_ID,
  WutheringwavesCharacterID,
} from '@/data/wutheringwaves/characters';
import { getAttributeImageURL } from '@/lib/image/wutheringwaves';
import Image from 'next/image';

interface Props {
  id: string;
}

const WutheringwavesCharacterProfile = ({ id }: Props) => {
  const character = WUTHERINGWAVES_CHARACTER_BY_ID[id as WutheringwavesCharacterID];

  if (!character) {
    return null;
  }

  return (
    <div className="relative">
      <Image src={character.profileImageURL} alt={character.name} width={100} height={100} />
      <div className="absolute top-0 right-0">
        <Image
          src={getAttributeImageURL(character.attribute)}
          alt={character.attribute}
          width={32}
          height={32}
        />
      </div>
    </div>
  );
};

export default WutheringwavesCharacterProfile;
