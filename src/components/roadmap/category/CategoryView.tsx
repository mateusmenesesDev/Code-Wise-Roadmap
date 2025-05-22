import { AlertTriangle, Check, Star } from 'lucide-react';
import CollapsibleCategory from '~/components/CollapsibleCategory';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { categories } from '~/constants';
import { cn } from '~/lib/utils';
import type { SkillRate } from '~/utils/roadmap';
import {
	calculateOverallPriority,
	getPriorityLabel,
	getRatingLabel
} from '~/utils/roadmap';

interface CategoryViewProps {
	techByCategories: Record<string, SkillRate[]>;
	userRatings: SkillRate[];
}

export function CategoryView({
	techByCategories,
	userRatings
}: CategoryViewProps) {
	return (
		<div className="mt-8 border-border border-t pt-8">
			<h2 className="mb-4 font-bold text-xl">Technologies by Category</h2>

			{Object.entries(techByCategories).map(([category, techs]) => {
				const categoryData = categories.find((c) => c.name === category);
				if (!categoryData) return null;

				const color = categoryData?.color;

				// Sort technologies by overall priority
				const sortedTechs = [...techs].sort((a, b) => {
					const priorityA = calculateOverallPriority(a);
					const priorityB = calculateOverallPriority(b);
					return priorityA - priorityB; // Lower score = higher priority
				});

				return (
					<CollapsibleCategory
						key={category}
						title={categoryData.name}
						icon={<categoryData.Icon className={categoryData.iconColor} />}
						iconColor={categoryData.iconColor}
						techCount={sortedTechs.length}
						className="mb-2"
					>
						<div className="space-y-4">
							{sortedTechs.map((tech) => {
								const userRating = userRatings.find(
									(r) => r.technology === tech.technology
								);
								const rating = userRating?.rating || 0;
								const priority = tech.techDetails?.priority || 5;
								const priorityInfo = getPriorityLabel(priority);

								return (
									<Card
										key={tech.id}
										className={cn(color, rating >= 75 && 'bg-accent/10')}
									>
										<CardHeader className="py-3">
											<div className="flex items-center justify-between">
												<div>
													<div className="flex items-center gap-2">
														<CardTitle className="text-lg">
															{tech.technology}
														</CardTitle>
														{rating < 75 && (
															<div
																className={`flex items-center gap-1 ${priorityInfo.color}`}
															>
																<AlertTriangle className="h-4 w-4" />
																<span className="font-medium text-xs">
																	{priorityInfo.label}
																</span>
															</div>
														)}
													</div>
													<div className="mt-1 text-muted-foreground text-sm">
														<div className="flex items-center gap-2">
															<span>Your level: {getRatingLabel(rating)}</span>
															<div className="flex">
																{[0, 25, 50, 75, 100].map((starRating) => (
																	<Star
																		key={`${tech.id}-star-${starRating}`}
																		className={`h-4 w-4 ${
																			rating >= starRating
																				? 'fill-primary text-primary'
																				: 'text-muted-foreground'
																		}`}
																	/>
																))}
															</div>
														</div>
													</div>
												</div>
												{rating >= 75 && (
													<div className="flex items-center gap-1 text-green-400">
														<Check className="h-4 w-4" />
														<span className="font-medium text-xs">
															Proficient
														</span>
													</div>
												)}
											</div>
										</CardHeader>
										<CardContent className="py-2">
											<p className="text-muted-foreground text-sm">
												{tech.techDetails?.description}
											</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</CollapsibleCategory>
				);
			})}
		</div>
	);
}
