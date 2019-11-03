import { Product } from '@src/core/model';
import {
  imageBlendedScotch_JohnWalker,	//1
  imageBlendedScotch_Odyssey,	//2
  imageBlendedScotch_KingGeorgeV,	//3
  imageBlendedScotch_JohnWalker_2016,	//4
  imageBlendedScotch_JohnWalker_2017,	//5
  imageBlendedScotch_JohnWalker_2018,	//6
  // imageSingleMalt_Cladach_42,	//7
  // imageSingleMalt_GlenOrd_42,	//8
  // imageSingleMalt_GlenOrd_41,	//9
  // imageSingleMalt_GlenOrd_40,	//10
  // imageSingleMalt_Talisker_25,	//11
  // imageSingleMalt_CaoIla_15,	//12
  // imageSingleMalt_Teaninich_17,	//13
  // imageSingleMalt_Inchgower_27,	//14
  // imageSingleMalt_Oban_21,	//15
  // imageSingleMalt_Pittyvaich,	//16
  // imageSingleMalt_Linkwood_37,	//17
  // imageSingleMalt_PortEllen_39,	//18
  // imageSingleMalt_Clynelish_2015,	//19
  // imageSingleMalt_Talisker_15,	//20
  // imageSingleMalt_Cragganmore_12,	//21
  // imageSingleMalt_Cardhu_14,	//22
  // imageSingleMalt_Lagavulin_12,	//23
  // imageSingleMalt_PittyVaich_29,	//24
  // imageSingleMalt_Dalwhinnie_30,	//25
  // imageSingleMalt_Mortlach_26,	//26
  // imageSingleMalt_SingletonOfGlenOrd_18,	//27
} from '@src/assets/images';

export const products: Product[] = [
  {
   name: 'THE JOHN WALKER\nTHE FOUNDER\'S BLEND',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_JohnWalker,
    description: 'Kiệt tác The John Walker kiêu hãnh mang tên người sáng lập nên thương hiệu Johnnie Walker, là lời tán dương tối thượng đến bậc kì tài đã cống hiến cả cuộc đời cho ngành thủ công chế tác whisky. Siêu phẩm The John Walker được tuyển chọn từ những dòng whisky quí hiếm cùng thời với John Walker, có những loại whisky cả trăm năm tuổi. Những tinh chất này đã được chế tác thủ công theo phương pháp truyền thống với số lượng vô cùng hạn chế, trước khi được ủ trong một thùng gỗ sồi duy nhất. Vì thế, từng giọt vàng ngọc mang đến một trải nghiệm thăng hoa của vị giác, bắt đầu với hương gỗ sồi vani mạnh mẽ và kết thúc nồng nàn với vị khói đặc trưng. Chỉ những bậc sành sỏi về whisky mới cảm nhận trọn vẹn sự phối trộn tinh tế này. The John Walker được thiết kế kì công từ pha lê Baccarat trứ danh, cổ chai nạm vàng 24k, cùng hộp gỗ sơn mài sang trọng, khắc chế công phu với 11 lớp tinh xảo trong hơn 60 giờ.',
    size: 'Thể tích: 70 cl / Độ cồn: 40%\n' +
		'Bộ sưu tập: The Last Cask\n' +
		'Thùng ủ: Gỗ sồi 100 năm tuổi\n' +
		'Hương vị: Gỗ sồi, vani, dư vị khói đặc trưng\n'+
		'Số lượng 330 chai',
  },
  {
    name: 'ODYSSEY\nRARE TRIPPLE MALT',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_Odyssey,
    description: 'Whisky là thức uống mang dấu ấn những hành trình kì vĩ. Tới đầu thế kỉ 20, danh tiếng của dòng whisky hảo hạng Johnnie Walker đã vượt ra khỏi xứ sở Scotland để vang danh khắp châu Âu và thế giới. Những thùng gỗ sỗ lớn đã trải qua hàng thập kỉ ròng rã trau dồi hương vị, nay tiếp tục hành trình của mình trên những con tàu vượt biển lớn đến mọi nẻo đường trên toàn thế giới. Bước tiến vĩ đại này đã khai sinh ra John Walker & Sons Odyssey - tuyệt phẩm whisky với thiết kế độc đáo giúp chai có khả năng hòa nhịp cùng chuyển động của sóng biển. Loại rượu whisky thanh tao này được làm từ ba loại mạch nha đơn có chất lượng tuyệt hảo. Cảm nhận ở lần nhấp môi đầu tiên là hương kẹo toffee và mật ong lan tỏa. Hậu vị đầy ấn tượng với hương khói thơm nồng nàn đầy quyến rũ dường như kéo dài đến vô tận.',
    size: 'Thể tích: 70 cl / Độ cồn: 40%\n' + 
		'Bộ sưu tập: John Walker & Sons\n' +
		'Thùng ủ: Gỗ sồi châu Âu\n' +
		'Hương vị: Toffee, mật ong, quả berry, óc chó, dư vị khói đặc trưng\n' +
		'Số lượng giới hạn\n',
  },
  {
    name: 'KING GEORGE V\nA REGAL BLEND OF OUR RAREST WHISKY',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_KingGeorgeV,
    description: 'John Walker & Sons King George V là tuyệt tác whisky để ghi dấu sự kiện gia tộc Johnnie Walker vinh dự trở thành nhà cung cấp chính thức cho Hoàng gia Anh. Tuyệt phẩm whisky này phối trộn những hương vị đặc trưng của các nhà chưng cất rượu tồn tại trong triều đại vua George Đệ Ngũ, mang lại hương vị nồng mượt đặc trưng vốn chỉ dành cho hoàng tộc Cuốn hút từ giây phút đầu tiên, John Walker & Sons King George V đưa những nhà thưởng thức khó tính vào một chuyến phiêu lưu vị giác của các loại hạt rang, vị sô cô la đen và khói ngọt nồng đượm, hòa quyện cùng hương vị mật ong, chanh cam và cánh hoa hồng. Chai John Walker & Sons King George V được thiết kế với những góc cạnh sang trọng. Mỗi chai mang trong mình một số serial duy nhất, phản ánh tính chất giới hạn của dòng whisky hoàng tộc này.',
    size: 'Thể tích: 70 cl / Độ cồn: 43%\n' +
		'Bộ sưu tập: John Walker & Sons\n' +
		'Thùng ủ: Gỗ sồi Bourbon và Sherry\n' +
		'Hương vị: Nồng ấm từ loại hạt rang và vị khói, ngọt ngào của sô cô la đen, mật ong và trái cây tươi\n' +
		'Số lượng giới hạn',
  },
  {
    name: 'THE JOHN WALKER\nPRIVATE COLLECTION™ PHIÊN BẢN 2016',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_JohnWalker_2016,
    description: 'John Walker & Sons Private Collection Phiên Bản 2016 là phiên bản thứ ba trong series giới hạn được tung ra hàng năm, nối tiếp vai trò tôn vinh kỹ nghệ chế tác tinh hoa và tính sáng tạo của thương hiệu whisky John Walker & Sons. Với phiên bản giới hạn 2016, chỉ 8,888 chai được phân phối trên toàn thế giới. Sản phẩm được đóng chai trong bình thủy tinh sang trọng độc đáo, được đánh số riêng biệt nhằm tôn vinh hình hảnh nhãn nghiêng 24 độ nổi tiếng của Johnie Walker. Hơn 100 thùng gỗ sồi từ kho thùng ủ quý hiếm của nhà John Walker được chọn lọc để tạo tác nên chất rượu tinh túy độc nhất trong phiên bản này. Dấu ấn đầu tiên chính là mùi vị của sự sống căng tràn đến từ vùng đất nổi tiếng của Scotland. Kết cấu nhẹ nuông chiều làn môi trong lớp bọt kem êm ái. Vị ngọt ngào của mật ong hòa quyện cùng hương gỗ sồi và vani lướt nhẹ trên đầu lưỡi, đưa vị giác chu du đến thiên đường đa tầng hương toát ra từ lớp vỏ của trái cây chín mọng.',
    size: 'Thể tích: 70 cl / Độ cồn: 43%\n' +
		'Bộ sưu tập: Special Release 2016\n' +
		'Thùng ủ: Gỗ sồi\n' +
		'Hương vị: Mật ong ngọt ngào, hương sồi và vanilla hoà quyện tạo lớp bọt kem, trái cây tươi (lê và vỏ táo)\n' +
		'Chỉ có 8,888 chai trên toàn thế giới',
  },
  {
    name: 'THE JOHN WALKER\nPRIVATE COLLECTION™ PHIÊN BẢN 2017',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_JohnWalker_2017,
    description: 'John Walker & Sons Private Collection™ 2017 là phiên bản thứ tư của bộ sưu tập quý hiếm được tung ra hàng năm, nhằm tôn vinh tinh thần sáng tạo và kỹ thuật sản xuất độc nhất của thương hiệu whisky John Walker & Sons™ . Chỉ có 5.588 chai được đánh số trên thị trường thế giới, phiên bản đặc biệt 2017 được mang tên “Mastery of Oak” chính bởi sự cầu kỳ trong quá trình chuyển đổi rượu từ các thùng chưng cất. Quá trình rượu trưởng thành từ những thùng gỗ sồi già Mỹ đến thùng gỗ sồi non Mỹ/châu Âu đã tạo nên hương vị vani ngọt ngào cùng nồng độ đúng chuẩn. Vị ngọt đậm đà của trái cây hòa quyện cùng hương gỗ sồi và vani lướt nhẹ trong vòm họng, đưa vị giác trải qua nhiều cung bậc của các tầng hương. Hậu vị kéo dài bằng hương khói nồng lan tỏa. Thiết kế chai cổ điển sang trọng với nắp chai được minh họa như các vòng gỗ sồi cùng đường cắt góc cạnh thể hiện trọn vẹn sự hoàn hảo của loại whisky thượng hạng này',
    size: 'Thể tích: 70 cl / Độ cồn: 46.8%n' +
		'Whisky mạch nha đơn vùng Speysiden' +
		'Bộ sưu tập: Special Release 2017n' +
		'Thùng ủ: Gỗ sồi già Mỹ và châu Âun' +
		'Hương vị: Vị ngọt hương vanilla nồng nàn, trái cây, mùi khói hài hoà ở hậu vịn' +
		'Chỉ có 8,5.588 chai trên toàn thế giới',
  },
  {
    name: 'THE JOHN WALKER\nPRIVATE COLLECTION™ 28 NĂM TUỔI',
    type: 'BLENDED SCOTCH',
    colors: ['Black', 'Red', 'White'],
    cost: 150,
    currency: '$',
    photo: imageBlendedScotch_JohnWalker_2018,
    description: 'John Walker & Sons Private C ollection™ 2017 là phiên bản thứ tư của bộ sưu tập quý hiếm được tung ra hàng năm, nhằm tôn vinh tinh thần sáng tạo và kỹ thuật sản xuất độc nhất của thương hiệu whisky John Walker & Sons™ . Chỉ có 5.588 chai được đánh số trên thị trường thế giới, phiên bản đặc biệt 2017 được mang tên “Mastery of Oak” chính bởi sự cầu kỳ trong quá trình chuyển đổi rượu từ các thùng chưng cất. Quá trình rượu trưởng thành từ những thùng gỗ sồi già Mỹ đến thùng gỗ sồi non Mỹ/châu Âu đã tạo nên hương vị vani ngọt ngào cùng nồng độ đúng chuẩn. Vị ngọt đậm đà của trái cây hòa quyện cùng hương gỗ sồi và vani lướt nhẹ trong vòm họng, đưa vị giác trải qua nhiều cung bậc của các tầng hương. Hậu vị kéo dài bằng hương khói nồng lan tỏa. Thiết kế chai cổ điển sang trọng với nắp chai được minh họa như các vòng gỗ sồi cùng đường cắt góc cạnh thể hiện trọn vẹn sự hoàn hảo của loại whisky thượng hạng này.',
    size: 'Thể tích: 70 cl / Độ cồn: 46.8%n' +
		'Whisky mạch nha đơn vùng Speysiden' +
		'Bộ sưu tập: Special Release 2017n' +
		'Thùng ủ: Gỗ sồi già Mỹ và châu Âun' +
		'Hương vị: Vị ngọt hương vanilla nồng nàn, trái cây, mùi khói hài hoà ở hậu vịn' +
		'Chỉ có 8,5.588 chai trên toàn thế giới',
  },
];
